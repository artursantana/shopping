
import styled from "@emotion/styled";



export const Container = styled.div`

display: flex;
margin: auto;
border-radius: 10px;
box-shadow: 0 2px 7px 0 rgba(0,0,0, 0.20);
text-align: center;
max-width: 650px;
padding: 15px;
align-items: flex-start;



img{
    max-width: 100px;
    max-height: 100px;
    margin-right:10px ;
}

` 

export const Info = styled.div`

text-align: start;


h1{
font-size: 16px;
color: #2c3e50;
}

.price{
        font-size: 26px;
        font-weight: 700;
        color: #3498db;
}

footer {
    display: flex;
    align-items: center;


    .promotion_card_count {

    }

    .promotion_card_count{

        margin-left: auto;
        margin-right: 20px;
        color: #3498db;

    }

    a{
                border: 1px solid #3498db;
                border-radius:4px;
                color: #3498db;
                text-decoration: none;
                padding: 8px;
        }

}

`