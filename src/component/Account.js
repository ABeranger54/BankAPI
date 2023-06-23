function Account(props) {
    return (
    <section className="account">
        <div className="account-content-wrapper">
            <h3 className="account-title">{props.title}</h3>
            <p className="account-amount">{props.balance}</p>
            <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
        </div>
    </section>
    );
  }
  
  export default Account;
  