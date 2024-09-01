const Table = ({ sat }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {sat.map((data) => {
          return (
            <tr key={data.id}>
              <td>{data.name}</td>
              <td>{data.type}</td>
              <td>{data.launchDate}</td>
              <td>{data.operational == true ? "Active" : "Inactive"}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
