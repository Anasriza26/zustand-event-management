"use client";

import { useEffect } from "react";
import useUserStore from "@/store/useUserStore";

export default function UserList() {
    // Get store values
    const users = useUserStore((state) => state.users);
    const loading = useUserStore((state) => state.loading);
    const error = useUserStore((state) => state.error);
    const fetchUsers = useUserStore((state) => state.fetchUsers);

    // Fetch users when component mounts
    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    if (loading) {
        return <p>Loading users...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h1>Users List</h1>

            {users.map((user) => (
                <div key={user.id}>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    );
}