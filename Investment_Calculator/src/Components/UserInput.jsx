export default function UserInput({ userInput, handleInputChange}) {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number"
                           value = {userInput.initialInvestment}
                           onChange={(event) =>
                               handleInputChange("initialInvestment", event.target.value)}
                           required/>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number"
                           value = {userInput.annualInvestment}
                           onChange={(event) =>
                               handleInputChange("annualInvestment", event.target.value)}
                           required/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number"
                           value = {userInput.expectedReturn}
                           onChange={(event) =>
                               handleInputChange("expectedReturn", event.target.value)}
                           required/>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number"
                           value = {userInput.duration}
                           min="1"
                           onChange={(event) =>
                               handleInputChange("duration", event.target.value)}
                           required/>
                </p>
            </div>
        </section>
    )
}