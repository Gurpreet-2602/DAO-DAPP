import {useState,useEffect} from "react"
function InvestorList({state}){
   const [list,setList]=useState([]);
   useEffect(()=>{
      const {contract}=state;
      async function investorList(){
         
         const list = await contract.methods.InvestorList().call();
        setList(list);
      }
      contract && investorList()
   },[state])
   
   return<>
    <div className="list">
    <h3>Investor's List</h3>
   {list.map((investorAddress)=>{
     return <p>{investorAddress}</p>
   })}
    </div>
   </>
  }
  export default InvestorList;