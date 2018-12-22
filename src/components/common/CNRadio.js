import React from "react"

const CNRadio = ({
    name,
    label,
    groupName,
    checked,
    handleChange
}: {
    name: string,
    label: string,
    groupName: string,
    checked: boolean,
    handleChange: Function
}) => (
    <span style={{ padding: "0px 20px" }}>
        <label htmlFor={name}>{label}</label>
        <input
            type="radio"
            id={name}
            name={groupName}
            value={name}
            checked={checked}
            onChange={handleChange}
        />
    </span>
);

export default CNRadio;

// export default class CNRadio extends React.Component<
//     {
//         name: string,
//         label: string,
//         groupName: string,
//         defaultChecked: boolean
//     }
// >{
//     constructor(props){
//         super(props);
//         this.state = {
//             checked: props.defaultChecked
//         }
//         this.handleChange = this.handleChange.bind(this);
//     }

//     handleChange(e) {
//         this.setState({
//             checked: e.target.checked
//         })
//     }

//     render() {
//         let {name, label, groupName} = this.props;
//         return (
//             <span style={{ padding: "0px 20px" }}>
//                 <label htmlFor={name}>{label}</label>
//                 <input
//                     type="radio"
//                     id={name}
//                     name={groupName}
//                     value={name}
//                     checked={this.state.checked}
//                     onChange={this.handleChange}
//                 />
//             </span>
//         )
//     }
// }