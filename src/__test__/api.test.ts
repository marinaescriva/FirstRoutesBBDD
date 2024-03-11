import request from "supertest";
import { AppDataSource } from "../database/db";
import { app } from "../app";

// import { Server } from 'http'

let server: any;
let token = "";

beforeAll(async () => {
  await AppDataSource.initialize()

  server = app.listen(4001);
})

afterAll(async () => {
  try {
    if (server) {
      await server.close();
      console.log('Server closed');
    }

    await AppDataSource.destroy();
  } catch (error) {
    console.error('Error closing server and destroying database connection:', error);
    throw error;
  }
})

describe ('api healthy' , () => {
    test ('server is healthy' , async () => {

        const { status, body } = await request(server)
        .get('/healthy')

        expect(status).toBe(200)
    
    });
})

describe ('api auth' , () => {
    test ('register user without password' , async () => {

        const { status, body } = await request(server)
        .post('/api/register')
        .send(
            {
                name:"marina",
                email: "marina@marina.com",
                password:""
            }
        )

        expect(status).toBe(400)
    
    });

    test ('register user without mail' , async () => {

        const { status, body } = await request(server)
        .post('/api/register')
        .send(
            {
                name:"marina",
                email: "",
                password:"123456"
            }
        )

        expect(status).toBe(400)
    
    });


// describe ('api auth' , () => {
//     test ('register user successfully' , async () => {

//         const { status, body } = await request(server)
//         .post('/api/register')
//         .send(
//             {
//                 name:"marina",
//                 email: "marina@marina.com",
//                 password:"123456"
//             }
//         )

//         expect(status).toBe(201)
    
//     });
// })

    test ('logged successfully' , async () => {

        const { status, body } = await request(server)
        .post('/api/login')
        .send(
            {
                email: "marina@marina.com",
                password:"123456"
            }
        )

        token = body.token

        expect(status).toBe(200)
    
    })

    
    test ('update user successfully' , async () => {

        const { status, body } = await request(server)
        .put('/api/users/profile')
        .send(
            {
                name: "elia"
            }
        )

        .set('Authorization' , `Bearer ${token}`)

        expect(status).toBe(200)
        expect(body.success) .toBe(true)
    
    })


});