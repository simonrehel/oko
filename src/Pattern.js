function Pattern(props) {
    return (
        <table class="pattern" rules="all">
            {
                props.pattern.map((row) => (
                    <tr>
                        {
                            row.map((column) => (
                                <td>{column ? '\u2022' : ''}</td>
                            ))
                        }
                    </tr>
                ))
            }
        </table>
    );
}

export default Pattern;