function Pattern(props) {
    const rows = [1, 2, 3, 4, 5];
    const columns = [1, 2, 3, 4, 5];

    return (
        <table className="pattern" rules="all">
            <tbody>
                {
                    rows.map((row) => (
                        <tr key={row}>
                            {columns.map((column) => (
                                <td key={row*column}>{props.pattern.includes((row-1)*5 + column) ? '\u26AB' : ''}</td>
                            ))}
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}

export default Pattern;