import { useEffect, useState } from 'react';

export default function UserManagement() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({});

  const API_URL = 'https://4amitest-bli6.wp1.sh/wp-json/users/v1';

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch(`${API_URL}/all`);
    const data = await response.json();
    setUsers(data);
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
      email: user.email || '',
      first_name: user.first_name || '',
      last_name: user.last_name || '',
      phone: user.phone || '',
      company: user.company || '',
      active: user.active || false,
    });
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
    await fetch(`${API_URL}/edit/${editingUser}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    setEditingUser(null);
    fetchUsers();
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">User Management</h1>
            {editingUser && (
        <form onSubmit={handleSubmit} className="mt-6 p-4 border rounded">
          <h2 className="text-lg font-semibold mb-2">Edit User ID: {editingUser}</h2>
          <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="block mb-2 w-full p-2 border" />
          <input name="first_name" placeholder="First Name" value={formData.first_name} onChange={handleChange} className="block mb-2 w-full p-2 border" />
          <input name="last_name" placeholder="Last Name" value={formData.last_name} onChange={handleChange} className="block mb-2 w-full p-2 border" />
          <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className="block mb-2 w-full p-2 border" />
          <input name="company" placeholder="Company" value={formData.company} onChange={handleChange} className="block mb-2 w-full p-2 border" />
          
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
      <table className="w-full border">
        <thead>
          <tr>
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
                <button className="text-red-600" onClick={() => handleDelete(user.ID)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>


    </div>
  );
}
