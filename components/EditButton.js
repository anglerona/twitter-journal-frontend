
import styled from 'styled-components';

const Button = styled.button`
    width: 100%;
    height:40px;
    margin: 8px 0;
    text-decoration: none;
    background: #048686;
    border-radius: 4px;
    border-color: white;
    font-size: 18px;
    padding: 20px 24px;
    font-weight: 600;
    letter-spacing: 0.025em;
    color: white;
    transition: all 0.125s ease;
    text-align: Center;
    float:right;
    position: reltive;
`
export const EditButton = () =>{

    function edit(){

    }
    return (
        <div>
            <Button onClick={edit}>
                Edit
            </Button>
        </div>
        
    )
}