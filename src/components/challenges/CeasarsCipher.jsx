import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const CeasarsCipher = () =>{

    

    const convertWordToNum=(word)=>{

        var number

        if(word==="a"||word=="A"){number=1}
        if(word==="b"||word=="B"){number=2}
        if(word==="c"||word=="C"){number=3}
        if(word==="d"||word=="D"){number=4}
        if(word==="e"||word=="E"){number=5}
        if(word==="f"||word=="F"){number=6}
        if(word==="g"||word=="G"){number=7}
        if(word==="h"||word=="H"){number=8}
        if(word==="i"||word=="I"){number=9}
        if(word==="j"||word=="J"){number=10}
        if(word==="k"||word=="K"){number=11}
        if(word=="l"||word=="L"){number=12}
        if(word=="m"||word=="M"){number=13}
        if(word=="n"||word=="N"){number=14}
        if(word=="o"||word=="O"){number=15}
        if(word=="p"||word=="P"){number=16}
        if(word=="q"||word=="Q"){number=17}
        if(word=="r"||word=="R"){number=18}
        if(word=="s"||word=="S"){number=19}
        if(word=="t"||word=="T"){number=20}
        if(word=="u"||word=="U"){number=21}
        if(word=="v"||word=="V"){number=22}
        if(word=="w"||word=="W"){number=23}
        if(word=="x"||word=="X"){number=24}
        if(word=="y"||word=="Y"){number=25}
        if(word=="z"||word=="Z"){number=26}



   
    

        return number;
    }

    const cipher=(letter,index)=>{

        var num 
        var encrypted

        num = convertWordToNum(letter)
        encrypted=num+index

        return encrypted

    }


    const onFinish = (values) => {

        var word = values.word.split('')
        var encryptedWord
        encryptedWord=word.map(cipher(values.index))
        console.log(encryptedWord)


      };



    return(

        <>
        <div>
            <h2 style={{marginLeft:"100px"}}>Ceasars Cipher</h2>
        </div>

<Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Word"
            name="word"
            rules={[
              {
                required: true,
                message: 'Please input a word!',
              },
            ]}
          >
            <Input />
          </Form.Item>
      
          <Form.Item
            label="Cipher Index"
            name="index"
            rules={[
              {
                required: true,
                message: 'Please input the cipher index!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
      
   
      
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Enter
            </Button>
          </Form.Item>
        </Form>
        
        
        </>
        
      );
} 


export default CeasarsCipher