import React from 'react'

const DisplUser = ({alluser,delUser,showEditForm}) => {
  return (
    <>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Color
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
          {alluser.map((el,i) =>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {i+1}
                </th>
                <td class="px-6 py-4">
                    {el.firstName}
                </td>
                <td class="px-6 py-4">
                    {el.lasttName}
                </td>
                <td class="px-6 py-4">
                    {el.name}
                </td>
                <td class="px-6 py-4">
                    <button onClick={()=>delUser(`${i}`)} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">D</button>
                    <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline">ED</button>
                </td>
                <td class="px-6 py-4">
                    {/* <button onClick={()=>delUser(`${i}`)} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">D</button> */}
                    <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={showEditForm}>ED</button>
                </td>
            </tr>

            )} 
        </tbody>
    </table>
</div>
    </>
  )
}

export default DisplUser