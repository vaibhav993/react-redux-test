import React from "react"
import ReactTable from "react-table"
import "react-table/react-table.css";

const Users = ({ isLoading, data }) => {
    const columns = [
        {
            Header: "Id",
            accessor: "id"
        },
        {
            Header: "Name",
            accessor: "name"
        },
        {
            Header: "Email",
            accessor: "email"
        },
        {
            Header: "Gender",
            accessor: "gender"
        },
        {
            Header: "Phone Number",
            accessor: "phone"
        },
        {
            Header: "Date Of Birth",
            accessor: "dob"
        }
    ];


    return (
        <div>
            <h1>Users List</h1>
            <ReactTable
                data= {data}
                columns= {columns}
                loading= {isLoading}
                showPagination= {true}
                defaultPageSize= {5}
                showPageSizeOptions= {false}
                //onPageChange={this.loadPaginatedData}
            />
        </div>
    )
};

export default Users;