function Pattern(props) {
    return (
        <table class="pattern" rules="all">
            {
                props.pattern.map((row) => (
                    <tr>
                        {
                            row.map((column) => (
                                <td><span className={column ? 'dot' : ''}></span></td>
                            ))
                        }
                    </tr>
                ))
            }
        </table>
    );
}

export default Pattern;