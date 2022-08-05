const Profile = () => {
  return (
    <div className="flex justify-center text-sm text-gray-600">
      <table className="border-separate border-spacing-3">
        <tbody>
          <tr>
            <td className="px-4 py-1 rounded bg-blue-100">FIRST NAME</td>
            <td className="pl-4">JOHN</td>
          </tr>
          <tr>
            <td className="px-4 py-1 rounded bg-blue-100">LAST NAME</td>
            <td className="pl-4">DOE</td>
          </tr>
          <tr>
            <td className="px-4 py-1 rounded bg-blue-100">CONTACT</td>
            <td className="pl-4">09123456789</td>
          </tr>
          <tr>
            <td className="px-4 py-1 rounded bg-blue-100">BIRTHDAY</td>
            <td className="pl-4">01/01/2020</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Profile;
