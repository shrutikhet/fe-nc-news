function Error({ errMsg }) {
  console.log(errMsg);
  return <section className="item3">{errMsg.msg}</section>;
}

export default Error;
