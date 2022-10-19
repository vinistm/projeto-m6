import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    :root {
        --brand-1:#4529E6;
        --brand-2:#5126EA;
        --brand-3:#B0A6F0;
        --brand-4:#EDEAFD;
        --grey-0:#0B0D0D;
        --grey-1:#212529;
        --grey-2:#495057;
        --grey-3:#868E96;
        --grey-4:#ADB5BD;
        --grey-5:#CED4DA;
        --grey-6:#DEE2E6;
        --grey-7:#E9ECEF;
        --grey-8:#F1F3F5;
        --grey-9:#F8F9FA;
        --grey-10:#FDFDFD;
        --whiteFixed:#FFFFFF;
        --alert-1:#CD2B31;
        --alert-2:#FDD8D8;
        --alert-3:#FFE5E5;
        --sucess-1:#18794E;
        --sucess-2:#CCEBD7;
        --sucess-3:#DDF3E4;
        --random-1:#E34D8C;
        --random-2:#C04277;
        --random-3:#7D2A4D;
        --random-4:#7000FF;
        --random-5:#6200E3;
        --random-6:#36007D;
        --random-7:#349974;
        --random-8:#2A7D5F;
        --random-9:#153D2E;
        --random-10:#6100FF;
        --random-11:#5700E3;
        --random-12:#30007D;
        --heading-1:font-weight:700;
        --heading-2:font-weight:600;
        --heading-3:font-weight:500;



    }
    body{
        font-family: 'Inter';
        font-style: normal;

    }
    button {
        font-family: 'Inter';
        font-style: normal;
        cursor: pointer;

    }
    input {
        font-family: 'Inter';
        font-style: normal;

    }
    button:hover {

    }
    h1,h2,h3,h4 {
        font-family: 'Lexend';
        font-style: normal;

    }
    p{
        font-family: 'Inter';
        font-style: normal;
    }
`;
