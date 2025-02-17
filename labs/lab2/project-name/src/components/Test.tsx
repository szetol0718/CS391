type TestProps={
    name:string;
    age:number;
    major:string;
}
export function Test({name,age,major}:TestProps){
    return (
        <div>
            <h3>Name : {name}</h3>
            <p>Age: {age}</p>
            <p>Major: {major}</p>
        </div>
    )

}