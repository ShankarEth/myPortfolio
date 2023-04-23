import {useState, useEffect} from 'react';
import '../../App.css';
function Component2() {
    let temp = 0;
    let arr = ['Developer','Trainer','Student','Learner','Freelancer'];
    const [role,setRole] = useState(arr[0]);
    useEffect(() => {
        const interval = setInterval(() => {
          temp++;
          if(temp===arr.length)
          {
            // eslint-disable-next-line 
            temp=0;
          }
          setRole(arr[temp]);
        }, 2500);
        return () => clearInterval(interval);
      }, []);
    return (
        <main class="main">
            <h1 class="text-light text-center">Shankar Narayan</h1>
            <h3 class="text-light text-center">I am a <span class="badge bg-primary text-light">{role}</span></h3>
        </main>
    );
}
export default Component2;