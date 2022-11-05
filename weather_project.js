let API_KEY='53aef90030d7b8cdc167da97f2f20914';





async function temp1(){
    let city = document.querySelector('#search').value
    
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    let res=await fetch(url);
    let temp=await res.json();
    console.log(temp)
    let result = document.querySelector("#result");
    result.innerHTML=JSON.stringify(temp.main.temp);
    result.innerHTML=` <table style="font-size:24px;">
    <tbody>
        <tr>
        <th></th>
        <th>City&nbsp;</th>
        <th>Min Temp(C)&nbsp;</th>
        <th>
            Max Temp(C)&nbsp;
        </th>
    </tr>
    <tr>  
    <td><img src="https://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png"</td>
    <td>${temp.name}&nbsp;</td>
    <td>${temp.main.temp_min}&nbsp;</td>
    <td>${temp.main.feels_like}&nbsp;</td>
   </tr>
   <tr>
   <td colspan="4" style="text-align:center;">${temp.weather[0].main}</td>
   </tr> 
    </tbody>
    
   </table>
`;

}