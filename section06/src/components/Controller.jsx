const Controller = ({updateCount}) => {
    const buttonValues = ['-1', '-10', '-100', '+100', '+10', '+1']

    return <div>
        {
            buttonValues.map(value => {
                    return <button
                        onClick={() => updateCount(parseInt(value))}
                        type={"button"}>{value}</button>
                }
            )
        }
    </div>
}

export default Controller;