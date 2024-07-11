import { FormEvent } from 'react'

const EmployeePage = () => {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const response = await fetch('http://divusi.geomethree.studio/api/employee', {
      method: 'POST',
      body: formData,
    })
 
    // Handle response if necessary
    const data = await response.json()
    if (data != null) alert('Data tersimpan')
  }

  return (
    <div className="w-3/6">
      <form onSubmit={onSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-full">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name Lengkap
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="year"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Tahun Masuk
                </label>
                <div className="mt-2">
                  <select
                    id="year"
                    name="year"
                    autoComplete="year"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>2024</option>
                    <option>2023</option>
                    <option>2022</option>
                    <option>2021</option>
                    <option>2020</option>
                    <option>2019</option>
                    <option>2018</option>
                    <option>2017</option>
                    <option>2016</option>
                    <option>2015</option>
                    <option>2014</option>
                    <option>2013</option>
                    <option>2012</option>
                    <option>2011</option>
                    <option>2010</option>
                  </select>
                </div>
              </div>
              

              <div className="col-span-full">
                <label
                  htmlFor="functional_position"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Jabatan Fungsional
                </label>
                <div className="mt-2">
                  <select
                    id="functional_position"
                    name="functional_position"
                    autoComplete="functional_position"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option value={"Engineer"}>Engineer</option>
                    <option value={"Administrasi"}>Administrasi</option>
                    <option value={"Support"}>Support</option>
                  </select>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="structural_position"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Jabatan Struktural
                </label>
                <div className="mt-2">
                  <select
                    id="structural_position"
                    name="structural_position"
                    autoComplete="structural_position"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option value={"Manager"}>Manager</option>
                    <option value={"Team Leader"}>Team Leader</option>
                    <option value={"Staff"}>Staff</option>
                  </select>
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

export default EmployeePage;
