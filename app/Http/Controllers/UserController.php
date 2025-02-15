<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = User::query();

        if ($request->has('fullname') && !empty($request->fullname)) {
            $query->where('fullname', 'LIKE', '%' . $request->fullname . '%');
        }
    
        if ($request->has('email') && !empty($request->email)) {
            $query->where('email', 'LIKE', '%' . $request->email . '%');
        }
    
        if ($request->has('status') && !empty($request->status)) {
            $query->where('status', $request->status);
        }
    
        $users = $query->paginate($request->input('length', 10));

        return response()->json([
            'data' => $users,
            'recordsTotal' => $users->total(),
            'recordsFiltered' => $users->total(),
            'pages' => $users->lastPage(),
            'page' => $users->currentPage(),
            'length' => $users->perPage(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'fullname' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'birthday' => 'nullable|date',
            'gender' => 'nullable|in:1,2',
            'avatar' => 'nullable|string',
            'status' => 'nullable|in:1,2,3',
            'password' => 'required|string|min:6',
        ]);

        $validated['password'] = Hash::make($validated['password']);

        $user = User::create($validated);

        return response()->json($user, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        return response()->json($user);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $user = User::find($id);

        $validated = $request->validate([
            'fullname' => 'sometimes|string|max:255',
            'email' => ['sometimes', 'email', Rule::unique('users', 'email')->ignore($user->id)],
            'birthday' => 'nullable|date',
            'gender' => 'nullable|in:1,2',
            'avatar' => 'nullable|string',
            'status' => 'nullable|in:1,2,3',
            'password' => 'nullable|string|min:6',
        ]);

        if (isset($validated['password'])) {
            $validated['password'] = Hash::make($validated['password']);
        }

        $user->update($validated);

        return response()->json($user);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        $user->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'User deleted successfully'
        ]);
    }
}
