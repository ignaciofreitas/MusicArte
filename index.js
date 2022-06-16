let btn = document.querySelector('.conf_compra')

btn.addEventListener('click', () => {

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Tu compra fue confirmada!',
        showConfirmButton: false,
        timer: 1500
    })
    
})

btn = document.querySelector('.conf_compra2')
btn.addEventListener('click', () => {

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Tu compra fue confirmada!',
        showConfirmButton: false,
        timer: 1500
    })
    
})

btn = document.querySelector('.conf_compra3')
btn.addEventListener('click', () => {

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Tu compra fue confirmada!',
        showConfirmButton: false,
        timer: 1500
    })
    
})

btn = document.querySelector('.canc_compra')
btn.addEventListener('click', () => {

    Swal.fire({
        title: 'Está seguro de eliminar el producto?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, seguro',
        cancelButtonText: 'No, no quiero'
    })    
})

btn = document.querySelector('.canc_compra2')
btn.addEventListener('click', () => {

    Swal.fire({
        title: 'Está seguro de eliminar el producto?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, seguro',
        cancelButtonText: 'No, no quiero'
    })    
})

btn = document.querySelector('.canc_compra3')
btn.addEventListener('click', () => {

    Swal.fire({
        title: 'Está seguro de eliminar el producto?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, seguro',
        cancelButtonText: 'No, no quiero'
    })  
})
