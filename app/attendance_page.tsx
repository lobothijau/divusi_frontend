import { FormEvent, useEffect, useState } from "react";
import { useFormState } from "react-dom";
import Datepicker, { DateRangeType } from "react-tailwindcss-datepicker";

const AttendancePage = () => {
  const [employees, setEmployees] = useState<any>([]);
  const [date, setDate] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue: any) => {
    console.log("newValue:", newValue);
    setDate(newValue);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://divusi.geomethree.studio/employee");
      const json = await data.json();
      setEmployees(json);
    };

    fetchData().catch(console.error);
  }, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const response = await fetch("http://divusi.geomethree.studio/employee", {
      method: "POST",
      body: formData,
    });

    // Handle response if necessary
    const data = await response.json();
    if (data != null) alert("Data tersimpan");
  }

  return (
    <div className="w-3/6">
      <form onSubmit={onSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <input
                type="hidden"
                name="date"
                value={date.startDate != null ? date.startDate : ''}
              />
              <div className="col-span-full border-1 ring-gray-300">
                <label htmlFor="">Tanggal</label>
                <div className="mt-2">
                  <Datepicker
                    value={date}
                    asSingle={true}
                    onChange={handleValueChange}
                  />
                </div>
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="employee_id"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Pegawai
                </label>
                <div className="mt-2">
                  <select
                    id="employee_id"
                    name="employee_id"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    {employees.map((employee:any) => (
                      <option key={employee.nip} value={employee.id}>{employee.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="year"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Status
                </label>
                <div className="mt-2">
                  <select
                    id="status"
                    name="status"
                    autoComplete="status"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option value={'hadir'}>Hadir</option>
                    <option value={'sakit'}>Sakit</option>
                    <option value={'izin'}>Izin</option>
                    <option value={'alpha'}>Alpha</option>
                  </select>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="notes"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Catatan
                </label>
                <div className="mt-2">
                  <textarea
                    id="notes"
                    name="notes"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AttendancePage;
