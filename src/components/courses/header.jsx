
const HeaderComponent = (props) => {
    return (
      <tr>
        <th>{props.firstValue}</th>
        <th>{props.secondValue}</th>
        <th>{props.thirdValue}</th>
      </tr>
    );
}

export default HeaderComponent;