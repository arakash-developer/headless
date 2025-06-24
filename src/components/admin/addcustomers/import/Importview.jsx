import Draft from "@/assets/Draft";
import EditIcon from "@/assets/EditIcon";
import { Checkbox } from "antd";
import { IoFilterOutline } from "react-icons/io5";

const Importview = () => {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const usersInformation = [
    {
      username: "jdoe92",
      firstName: "John",
      lastName: "Doe",
      role: "Admin",
      email: "jdoe92@gmail.com",
      color: "bg-[var(--secondary)]",
    },
    {
      username: "emily_smith",
      firstName: "Emily",
      lastName: "Smith",
      role: "Manager",
      email: "emily.smith@outlook.com",
    },
    {
      username: "michaelb85",
      firstName: "Michael",
      lastName: "Brown",
      role: "Asset Manager",
      email: "michaelb85@yahoo.com",
      color: "bg-[var(--secondary)]",
    },
    {
      username: "sarah.james",
      firstName: "Sarah",
      lastName: "James",
      role: "Financial Officer",
      email: "sarah.james@gmail.com",
    },
    {
      username: "tony.j",
      firstName: "Tony",
      lastName: "Johnson",
      role: "Data Scientist",
      email: "tony.j@gmail.com",
      color: "bg-[var(--secondary)]",
    },
    {
      username: "claire_lee",
      firstName: "Claire",
      lastName: "Lee",
      role: "Service Coordinator",
      email: "claire.lee@icloud.com",
    },
    {
      username: "ryan_williams",
      firstName: "Ryan",
      lastName: "Williams",
      role: "Analyst",
      email: "ryan.williams@outlook.com",
      color: "bg-[var(--secondary)]",
    },
    {
      username: "andrew_07",
      firstName: "Andrew",
      lastName: "Davis",
      role: "Analyst",
      email: "andrew_07@hotmail.com",
    },
    {
      username: "mia.adams",
      firstName: "Mia",
      lastName: "Adams",
      role: "Analyst",
      email: "mia.adams@gmail.com",
      color: "bg-[var(--secondary)]",
    },
    {
      username: "jason_22",
      firstName: "Jason",
      lastName: "Taylor",
      role: "User",
      email: "jason_22@yahoo.com",
    },
  ];
  return (
    <div>
      <div className="mt-6">
        <h2 className="font-medium text-[24px] leading-[117%] text-var(--primary2)">
          Add Customer
        </h2>
        <p className="mt-2 font-normal text-base leading-[150%] text-[var(--text-secondary)]">
          Dashboard / Manage Customers /{" "}
          <span className="text-[#343a40]">Add Customer</span>
        </p>
      </div>

      <div class="mt-4 p-4 bg-[var(--secondary)] servicecard rounded-[8px]">
        <table class="table-auto w-full border-collapse">
          <thead>
            <tr class="text-left bg-[var(--secondary)]">
              <th class="p-4 border border-gray-300 border-t-0 border-l-0 font-medium text-xs text-[var(--text-secondary)]">
                <Checkbox
                  className="custom-red-checkbox"
                  onChange={onChange}
                ></Checkbox>
              </th>
              <th class="p-4 border border-gray-300 border-t-0 border-l-0">
                <div className="flex justify-between items-center font-medium text-xs text-[var(--text-secondary)]">
                  Username
                  <IoFilterOutline className="text-md" />
                </div>
              </th>
              <th class="p-4 border border-gray-300 border-t-0 border-l-0">
                <div className="flex justify-between items-center font-medium text-xs text-[var(--text-secondary)]">
                  First Name
                  <IoFilterOutline className="text-md" />
                </div>
              </th>
              <th class="p-4 border border-gray-300 border-t-0 border-l-0">
                <div className="flex justify-between items-center font-medium text-xs text-[var(--text-secondary)]">
                  Last Name
                  <IoFilterOutline className="text-md" />
                </div>
              </th>
              <th class="p-4 border border-gray-300 border-t-0 border-l-0">
                <div className="flex justify-between items-center font-medium text-xs text-[var(--text-secondary)]">
                  Role
                  <IoFilterOutline className="text-md" />
                </div>
              </th>
              <th class="p-4 border border-gray-300 border-t-0 border-l-0">
                <div className="flex justify-between items-center font-medium text-xs text-[var(--text-secondary)]">
                  E-Mail
                  <IoFilterOutline className="text-md" />
                </div>
              </th>

              <th class="p-4 border border-gray-300 border-t-0 border-l-0 border-r-0">
                <div className="flex justify-between items-center font-medium text-xs text-[var(--text-secondary)]">
                  Action
                  <IoFilterOutline className="text-md" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {usersInformation.map((user, index) => (
              <tr class={`${user?.color}`}>
                <td class="p-4 border border-gray-300 border-t-0 border-l-0">
                  <Checkbox
                    className="custom-red-checkbox"
                    onChange={onChange}
                  ></Checkbox>
                </td>
                <td class="p-4 ml-2 border border-gray-300 border-t-0 border-l-0 font-normal text-sm leading-[171%] text-[#343a40]">
                  {user?.username}
                </td>
                <td class="p-4 ml-2 border border-gray-300 border-t-0 border-l-0 font-normal text-sm leading-[171%] text-[#343a40]">
                  {user?.firstName}
                </td>
                <td
                  class={`p-4 ml-2 border border-gray-300 border-t-0 border-l-0 font-normal text-sm leading-[171%] text-[#343a40] capitalize ${user?.status} `}
                >
                  {user?.lastName}
                </td>
                <td
                  class={`p-4 ml-2 border border-gray-300 border-t-0 border-l-0 font-normal text-sm leading-[171%] text-[#343a40] capitalize ${user?.status} `}
                >
                  {user?.role}
                </td>
                <td
                  class={`p-4 ml-2 border border-gray-300 border-t-0 border-l-0 font-normal text-sm leading-[171%] text-[#343a40] capitalize ${user?.status} `}
                >
                  {user?.email}
                </td>
                <td class="p-4 border border-gray-300 border-t-0 border-l-0 border-r-0">
                  <div className="flex items-center gap-x-3">
                    <div className="rounded-[8px] w-10 h-10 flex items-center justify-center border-2 border-[var(--neutral-400)] bg-[var(--secondary)] cursor-pointer">
                      <EditIcon />
                    </div>
                    <div className="rounded-[8px] w-10 h-10 flex items-center justify-center border-2 border-[var(--neutral-400)] bg-[var(--secondary)] cursor-pointer">
                      <Draft />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Importview;
