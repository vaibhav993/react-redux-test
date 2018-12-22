import React from "react"
import ReactTable from "react-table"
import "react-table/react-table.css";
import API from "../../api/api"

export default class Users extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            //data: [{"id":"1138","name":"Bernadine Cronin","gender":"female","dob":"1993-08-05","email":"elza19@hotmail.com","phone":"265.672.6720 x517","_links":{"self":{"href":"https://gorest.co.in/public-api/users/1138"},"avatar":{"href":"http://lorempixel.com/250/250/people/?23037"}}},{"id":"1139","name":"Jo Kovacek","gender":"male","dob":"1984-12-24","email":"mckayla19@gmail.com","phone":"1-254-669-6730 x87866","_links":{"self":{"href":"https://gorest.co.in/public-api/users/1139"},"avatar":{"href":"http://lorempixel.com/250/250/people/?39001"}}},{"id":"1140","name":"Horace Heaney","gender":"male","dob":"2003-12-24","email":"hane.ephraim@harber.com","phone":"645.915.8166 x244","_links":{"self":{"href":"https://gorest.co.in/public-api/users/1140"},"avatar":{"href":"http://lorempixel.com/250/250/people/?28634"}}},{"id":"1141","name":"Tevin Schimmel","gender":"male","dob":"1994-04-21","email":"kunde.bennett@stehr.net","phone":"930-364-5407","_links":{"self":{"href":"https://gorest.co.in/public-api/users/1141"},"avatar":{"href":"http://lorempixel.com/250/250/people/?45507"}}},{"id":"1142","name":"Greta Cartwright","gender":"female","dob":"1959-12-08","email":"beatty.jovan@gmail.com","phone":"(406) 554-8669 x7040","_links":{"self":{"href":"https://gorest.co.in/public-api/users/1142"},"avatar":{"href":"http://lorempixel.com/250/250/people/?78435"}}},{"id":"1143","name":"Neoma Russel","gender":"female","dob":"1973-06-28","email":"dlegros@yahoo.com","phone":"(209) 815-5008 x1358","_links":{"self":{"href":"https://gorest.co.in/public-api/users/1143"},"avatar":{"href":"http://lorempixel.com/250/250/people/?62616"}}},{"id":"1144","name":"Agustina Zieme","gender":"female","dob":"1981-02-28","email":"sincere.breitenberg@yahoo.com","phone":"1-685-413-8879","_links":{"self":{"href":"https://gorest.co.in/public-api/users/1144"},"avatar":{"href":"http://lorempixel.com/250/250/people/?52138"}}},{"id":"1145","name":"Raegan Bogan","gender":"female","dob":"1973-11-23","email":"tprohaska@hotmail.com","phone":"1-523-695-9940 x0235","_links":{"self":{"href":"https://gorest.co.in/public-api/users/1145"},"avatar":{"href":"http://lorempixel.com/250/250/people/?69697"}}},{"id":"1146","name":"Kylee McGlynn","gender":"female","dob":"1919-06-11","email":"oberbrunner.yadira@halvorson.com","phone":"1-439-283-3048","_links":{"self":{"href":"https://gorest.co.in/public-api/users/1146"},"avatar":{"href":"http://lorempixel.com/250/250/people/?73669"}}},{"id":"1147","name":"Rosella Gorczany","gender":"female","dob":"2000-07-24","email":"breanne40@yahoo.com","phone":"291-596-3827","_links":{"self":{"href":"https://gorest.co.in/public-api/users/1147"},"avatar":{"href":"http://lorempixel.com/250/250/people/?29680"}}},{"id":"1148","name":"Lorem ipsum","gender":"male","dob":"1961-01-15","email":"test1544758581941@inspun.com","phone":"1-719-242-2868 x870","_links":{"self":{"href":"https://gorest.co.in/public-api/users/1148"},"avatar":{"href":"http://lorempixel.com/250/250/people/?10555"}}},{"id":"1149","name":"Edythe Adams","gender":"female","dob":"1947-07-30","email":"nyah08@gmail.com","phone":"1-449-623-5151","_links":{"self":{"href":"https://gorest.co.in/public-api/users/1149"},"avatar":{"href":"http://lorempixel.com/250/250/people/?60813"}}},{"id":"1150","name":"Gunnar Frami","gender":"male","dob":"1953-09-03","email":"yoshiko81@hotmail.com","phone":"(482) 253-8088 x73924","_links":{"self":{"href":"https://gorest.co.in/public-api/users/1150"},"avatar":{"href":"http://lorempixel.com/250/250/people/?52407"}}},{"id":"1151","name":"Ignatius Toy","gender":"male","dob":"2016-08-12","email":"edyth.denesik@hotmail.com","phone":"306-775-0411 x106","_links":{"self":{"href":"https://gorest.co.in/public-api/users/1151"},"avatar":{"href":"http://lorempixel.com/250/250/people/?27886"}}},{"id":"1152","name":"Lilly Ward","gender":"female","dob":"1927-10-31","email":"vsimonis@moen.org","phone":"345.223.7060 x700","_links":{"self":{"href":"https://gorest.co.in/public-api/users/1152"},"avatar":{"href":"http://lorempixel.com/250/250/people/?33295"}}},{"id":"1153","name":"Noelia Mann","gender":"female","dob":"1979-06-09","email":"bins.brando@gmail.com","phone":"763.272.4605 x19012","_links":{"self":{"href":"https://gorest.co.in/public-api/users/1153"},"avatar":{"href":"http://lorempixel.com/250/250/people/?38183"}}},{"id":"1154","name":"Llewellyn Wyman","gender":"male","dob":"1972-01-22","email":"stokes.davonte@moen.org","phone":"1-547-773-2257 x18486","_links":{"self":{"href":"https://gorest.co.in/public-api/users/1154"},"avatar":{"href":"http://lorempixel.com/250/250/people/?36703"}}},{"id":"1155","name":"Norval Murphy","gender":"male","dob":"1951-01-19","email":"kessler.mittie@hotmail.com","phone":"(873) 499-2217 x5824","_links":{"self":{"href":"https://gorest.co.in/public-api/users/1155"},"avatar":{"href":"http://lorempixel.com/250/250/people/?34062"}}},{"id":"1156","name":"Nettie Bayer","gender":"female","dob":"1940-03-21","email":"nannie50@yahoo.com","phone":"1-781-914-9385 x4120","_links":{"self":{"href":"https://gorest.co.in/public-api/users/1156"},"avatar":{"href":"http://lorempixel.com/250/250/people/?14211"}}},{"id":"1157","name":"Ernest Hilll","gender":"male","dob":"1968-11-16","email":"epowlowski@heaney.net","phone":"+1-529-393-2046","_links":{"self":{"href":"https://gorest.co.in/public-api/users/1157"},"avatar":{"href":"http://lorempixel.com/250/250/people/?35228"}}}],
            loading: true,
            data: [],
            columns: [
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
            ]
        }
    }

    componentDidMount() {
        API.get(`/users?fields=id,name,email,gender,phone,dob`)
            .then(res => {
                if( res.status === 200 ) {
                    this.setState({
                        data: res.data.result || [],
                        loading: false
                    })
                    //console.log(res.data.result);
                }
            })
    }

    render() {

        return (
            <div>
                <h1>Users List</h1>
                <ReactTable
                    data= {this.state.data}
                    columns= {this.state.columns}
                    loading= {this.state.loading}
                    showPagination= {true}
                    defaultPageSize= {5}
                    showPageSizeOptions= {false}
                />
            </div>
        )
    }
}