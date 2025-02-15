jconfirm.defaults = {
  scrollToPreviousElement: false,
  scrollToPreviousElementAnimate: false,
  defaultButtons: {
    ok: {
      text: 'OK'
    },
    cancel: {
      text: 'Hủy bỏ'
    }
  },
  theme: 'bootstrap',
  draggable: false,
  animateFromElement: false,
  columnClass: 'col-sm-10 col-md-8 col-lg-5'
};

$.validator.messages.required = 'Đây là trường bắt buộc';
$.validator.messages.attributeRequired = ':A là trường bắt buộc.';
$.validator.messages.email = 'Vui lòng nhập chính xác địa chỉ email của bạn.';
$.validator.messages.rangelength = 'Vui lòng nhập giá trị hợp lệ từ {0} đến {1} ký tự.';
$.validator.messages.maxlength = 'Vui lòng nhập không quá {0} ký tự.';

$.validator.setDefaults({
  errorElement: 'label',
  errorPlacement: function (error, element) {
    error.addClass('invalid-feedback');
    if (element.prop('type') === 'checkbox') {
      error.insertAfter(element.parent('label'));
      return;
    }
    if (element.attr('data-type') === 'ckeditor') {
      error.insertAfter(element.parent().find('.cke'));
      return;
    }
    error.insertAfter(element);
  },
  highlight: function (element, errorClass, validClass) {
    $(element).addClass('is-invalid');
  },
  unhighlight: function (element, errorClass, validClass) {
    $(element).removeClass('is-invalid');
  },
  invalidHandler: function (form, validator) {
    const errors = validator.numberOfInvalids();
    if (errors) {
      validator.errorList[0].element.focus();
    }
  }
});

//Method
$.validator.addMethod("filesize", function (value, element, param) {
  return this.optional(element) || element.files[0].size <= param * 1000000;
}, "Tệp hình ảnh phải nhỏ hơn {0}MB"
);

jQuery.validator.addMethod('notBlank', function (value) {
  let text = $.trim(value).replace(/  +/g, ' ');
  let lengthOfText = text.length;
  let lengthOfValue = value.length;
  if (lengthOfText !== lengthOfValue) {
    return false;
  }
  return true;
});

jQuery.validator.addMethod('notBlankContent', function (value) {
  let text = $.trim(value);
  let lengthOfText = text.length;
  if (lengthOfText <= 0) {
    return false;
  }
  return true;
});

jQuery.validator.addMethod('validNumber', function (value) {
  let regex = /^(\d+(\.\d+)?)?$/;
  return value.trim().match(regex);
});

$.validator.addMethod("maxNumber", function (value, element) {
  if (value.trim() === "") {
    return true;
  }

  return parseFloat(value) <= 99999999999;
});

jQuery.validator.addMethod('customEmail', function (value) {
  let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return value.trim().match(regex);
});

$.validator.addMethod("complexPassword", function (value, element) {
  return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*]).{8,32}$/.test(value);
}, "Mật khẩu phải có ít nhất 8 ký tự và không quá 32 ký tự và phải chứa ít nhất 3 ký tự sau: chữ hoa và chữ thường, số và ký hiệu (!@#$%^&*)."
);

$.validator.addMethod("customUrl", function (value, element) {
  if (value === "") {
    return true;
  }
  return /^(https?:\/\/|www\.)[\w.-]+\.[a-z]{2,}(\/[\w.-]*)*\/?$/i.test(value);
});

function showSuccess(content) {
  $.alert({
    title: "",
    content: content,
    buttons: {
      'OK': function () {
        location.reload();
      },
    },
  });
}

function showError(content) {
  $.alert(content);
}

const loadingOverlay = $.dialog({
  icon: 'fa fa-spinner fa-spin',
  title: '',
  content: 'Đang xử lý. Vui lòng chờ...',
  animation: 'none',
  closeAnimation: 'none',
  closeIcon: false,
  lazyOpen: true
});

function showLoadingOverlay() {
  loadingOverlay.open();
}

function hideLoadingOverlay() {
  loadingOverlay.close();
}

function showSystemOccurred() {
  $.alert({
    title: '',
    content: 'Đã xảy ra lỗi hệ thống. Nếu sự cố vẫn tiếp diễn, vui lòng liên hệ với bộ phận hỗ trợ của chúng tôi.',
    animation: 'none',
    closeAnimation: 'none',
  });
}

function changeToSlug(sourceId, targetId) {
  let slug = $('#' + sourceId).val();

  slug = slug.toLowerCase();

  slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
  slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
  slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
  slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
  slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
  slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
  slug = slug.replace(/đ/gi, 'd');
  slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
  slug = slug.replace(/ /gi, "-");

  slug = slug.replace(/\-\-\-\-\-/gi, '-');
  slug = slug.replace(/\-\-\-\-/gi, '-');
  slug = slug.replace(/\-\-\-/gi, '-');
  slug = slug.replace(/\-\-/gi, '-');
  slug = '@' + slug + '@';
  slug = slug.replace(/\@\-|\-\@|\@/gi, '');

  $('#' + targetId).val(slug);
}

function previewImage(input, previewId) {
  let file = input.files[0];
  let previewElement = $('#' + previewId);

  if (file && file.type.startsWith('image/')) {
    let fileURL = URL.createObjectURL(file);

    previewElement.attr('src', fileURL);
    previewElement.show();
  } else {
    previewElement.hide();
    previewElement.attr('src', '');
  }
}

