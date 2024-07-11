import { useEffect, useState } from "react";

const ReportPage = () => {
  const [employees, setEmployees] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://divusi.geomethree.studio/api/report");
      const json = await data.json();
      setEmployees(json);
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              NIP
            </th>
            <th scope="col" className="px-6 py-3">
              Nama Pegawai
            </th>
            <th scope="col" className="px-6 py-3">
              Fungsional
            </th>
            <th scope="col" className="px-6 py-3">
              Struktural
            </th>
            <th scope="col" className="px-6 py-3">
              Hadir
            </th>
            <th scope="col" className="px-6 py-3">
              Sakit
            </th>
            <th scope="col" className="px-6 py-3">
              Izin
            </th>
            <th scope="col" className="px-6 py-3">
              Alpa
            </th>
            <th scope="col" className="px-6 py-3">
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee:any) => (
            <tr key={employee.nip} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {employee.nip}
              </th>
              <td className="px-6 py-4">{employee.name}</td>
              <td className="px-6 py-4">{employee.functional_position}</td>
              <td className="px-6 py-4">{employee.structural_position}</td>
              <td className="px-6 py-4">{employee.hadir}</td>
              <td className="px-6 py-4">{employee.sakit}</td>
              <td className="px-6 py-4">{employee.izin}</td>
              <td className="px-6 py-4">{employee.alpha}</td>
              <td className="px-6 py-4">{employee.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportPage;
