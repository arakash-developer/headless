import { useEffect, useState } from 'react';

export default function UserManagement() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [viewingUser, setViewingUser] = useState(null); // New state for viewing
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    first_name: '',
    last_name: '',
    title: '',
    company: '',
    phone: '',
    extension: '',
    code: '',
    active: false,
  });
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const API_URL = 'https://4amitest-bli6.wp1.sh/wp-json/users/v1';

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch(`${API_URL}/all`);
    const data = await response.json();
    setUsers(data);
    setSelectedUsers([]);
    setSelectAll(false);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      const res = await fetch(`${API_URL}/delete/${id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });
      const result = await res.json();
      if (result.success) fetchUsers();
      else alert(result.error || 'Failed to delete user.');
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user.ID);
    setFormData({
      username: user.username || '',
      email: user.email || '',
      first_name: user.first_name || '',
      last_name: user.last_name || '',
      title: user.title || '',
      company: user.company || '',
      phone: user.phone || '',
      extension: user.extension || '',
      code: user.code || '',
      active: user.active || false,
      password: '', // Do not pre-fill the password
    });
    setViewingUser(null); // Clear viewing mode when editing
  };

  const handleView = (user) => {
    setViewingUser(user.ID); // Set the user to view mode
    setFormData({
      username: user.username || '',
      email: user.email || '',
      first_name: user.first_name || '',
      last_name: user.last_name || '',
      title: user.title || '',
      company: user.company || '',
      phone: user.phone || '',
      extension: user.extension || '',
      code: user.code || '',
      active: user.active || false,
      password: '', // Do not pre-fill the password
    });
    setEditingUser(null); // Clear editing mode when viewing
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const toggleActive = (status) => {
    setFormData(prev => ({ ...prev, active: status }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare data to send, do not include empty password if it's not updated
    const dataToSend = {
      ...formData,
      password: formData.password ? formData.password : undefined, // Only include password if it's not empty
    };

    await fetch(`${API_URL}/edit/${editingUser}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataToSend),
    });

    setEditingUser(null);
    fetchUsers();
  };

  const handleSelectUser = (id) => {
    setSelectedUsers(prev =>
      prev.includes(id) ? prev.filter(uid => uid !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedUsers([]);
    } else {
      const allIds = users.map(user => user.ID);
      setSelectedUsers(allIds);
    }
    setSelectAll(!selectAll);
  };

  const handleBulkDelete = async () => {
    if (selectedUsers.length === 0) return;
    if (!window.confirm(`Delete ${selectedUsers.length} selected users?`)) return;

    for (const id of selectedUsers) {
      await fetch(`${API_URL}/delete/${id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });
    }
    fetchUsers();
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">User Management</h1>

      {/* Form for editing */}
      {editingUser && (
        <form onSubmit={handleSubmit} className="mt-6 p-4 border rounded">
          <h2 className="text-lg font-semibold mb-2">Edit User ID: {editingUser}</h2>
          <input name="username" placeholder="Username" value={formData.username} onChange={handleChange} className="block mb-2 w-full p-2 border" />
          <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="block mb-2 w-full p-2 border" />
          <input name="first_name" placeholder="First Name" value={formData.first_name} onChange={handleChange} className="block mb-2 w-full p-2 border" />
          <input name="last_name" placeholder="Last Name" value={formData.last_name} onChange={handleChange} className="block mb-2 w-full p-2 border" />
          <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className="block mb-2 w-full p-2 border" />
          <input name="company" placeholder="Company" value={formData.company} onChange={handleChange} className="block mb-2 w-full p-2 border" />
          <input name="extension" placeholder="Extension" value={formData.extension} onChange={handleChange} className="block mb-2 w-full p-2 border" />
          <input name="code" placeholder="Code" value={formData.code} onChange={handleChange} className="block mb-2 w-full p-2 border" />
          <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} className="block mb-2 w-full p-2 border" />
          <input name="password" type="password" placeholder="Password (Leave blank if not changing)" value={formData.password} onChange={handleChange} className="block mb-2 w-full p-2 border" />

          <div className="mb-4">
            <span className="mr-4 font-semibold">Status:</span>
            <button
              type="button"
              className={`px-3 py-1 rounded mr-2 ${formData.active ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
              onClick={() => toggleActive(true)}
            >
              Activate
            </button>
            <button
              type="button"
              className={`px-3 py-1 rounded ${!formData.active ? 'bg-red-600 text-white' : 'bg-gray-200'}`}
              onClick={() => toggleActive(false)}
            >
              Deactivate
            </button>
          </div>

          <button type="submit" className="bg-blue-600 text-white px-4 py-2">Save Changes</button>
        </form>
      )}

      {/* View Mode for User */}
      {viewingUser && (
        <div className="mt-6 p-4 border rounded">
          <h2 className="text-lg font-semibold mb-2">View User ID: {viewingUser}</h2>
          <div className="mb-2"><strong>Username:</strong> {formData.username}</div>
          <div className="mb-2"><strong>Email:</strong> {formData.email}</div>
          <div className="mb-2"><strong>First Name:</strong> {formData.first_name}</div>
          <div className="mb-2"><strong>Last Name:</strong> {formData.last_name}</div>
          <div className="mb-2"><strong>Phone:</strong> {formData.phone}</div>
          <div className="mb-2"><strong>Company:</strong> {formData.company}</div>
          <div className="mb-2"><strong>Extension:</strong> {formData.extension}</div>
          <div className="mb-2"><strong>Code:</strong> {formData.code}</div>
          <div className="mb-2"><strong>Title:</strong> {formData.title}</div>
          <div className="mb-2"><strong>Status:</strong> {formData.active ? 'Active' : 'Inactive'}</div>
        </div>
      )}

      <div className="mb-2">
        <button
          onClick={handleBulkDelete}
          className="bg-red-600 text-white px-4 py-2 rounded disabled:opacity-50"
          disabled={selectedUsers.length === 0}
        >
          Delete Selected ({selectedUsers.length})
        </button>
      </div>

      <table className="w-full border">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
              />
            </th>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Company</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.ID} className="border-t">
              <td>
                <input
                  type="checkbox"
                  checked={selectedUsers.includes(user.ID)}
                  onChange={() => handleSelectUser(user.ID)}
                />
              </td>
              <td>{user.ID}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.phone}</td>
              <td>{user.company}</td>
              <td>{user.active ? '✅ Active' : '❌ Inactive'}</td>
              <td>
                <button className="text-blue-600 mr-2" onClick={() => handleEdit(user)}>Edit</button>
                <button className="text-green-600 mr-2" onClick={() => handleView(user)}>View</button>
                <button className="text-red-600" onClick={() => handleDelete(user.ID)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
