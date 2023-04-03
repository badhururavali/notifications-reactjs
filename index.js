const Notification = (props) => {
  const { divColor, source, text } = props;
  return (
    <div className={`box-container ${divColor}`}>
      <img src={source} className={`icon`} />
      <p className={`notification_para`}>{text}</p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <div>
      <h1 class="heading">Notifications</h1>
    </div>
    <Notification
      divColor="primary-color"
      source="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      text="Information Message"
    />
    <Notification
      divColor="success-color"
      source="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      text="Success Message"
    />
    <Notification
      divColor="warning-color"
      source="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      text="Warning Message"
    />
    <Notification
      divColor="error-color"
      source="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      text="Error Message"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
