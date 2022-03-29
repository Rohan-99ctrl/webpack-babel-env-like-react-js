import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons/css/boxicons.min.css';
import Student from './components/Student';
import Teacher from './components/Teacher';
import './index.css';
import './main.scss';
import rohan from './myImage2.jpg';



const myPhoto = document.getElementById('myPhoto');
myPhoto.setAttribute('src', rohan);

const btnProfile =document.getElementById('btnProfile');

btnProfile.addEventListener('click', function(){
    alert();
});



let classCall = new Student();
console.log(classCall.ageCal());

let teacherCall = new Teacher();
console.log(teacherCall.tAgeCal());

// axios


function getAllProducts(){

    axios.get('http://localhost:5050/product').then((response) => {

        const allProducts = document.querySelector('#allProducts');
        let list = '';

        response.data.map((data) => {

            let {id, name, price, salePrice, photo} = data

            list += `
                <div class="col-md-3">
                    <div id="productEffect" class="card shadow">
                        <img style="height:200px;object-fit:cover;" class="card-img" src="${photo}" alt="">
                        <div class="card-body">
                            <h4>${name}</h4>
                            <p><span style="color:red;">${price}</span> -> <span style="color:green;">${salePrice}</span></p>
                            <div style="display:flex;align-items:center;justify-content:space-between">
                                <button class="btn btn-success btn-sm">Buy now</button>
                                <button class="btn btn-danger btn-sm">Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });

        allProducts.innerHTML = list;

    });

}

getAllProducts();


