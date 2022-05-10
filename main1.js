let nhap = null;
do{
    nhap = parseInt(prompt('Nhập vào số từ 1-10:'))
    // document.write(`Số bạn vừa nhập là: ${nhap}`)
}while(nhap > 10 || nhap < 1)
document.write(`Số bạn vừa nhập là: ${nhap}`)