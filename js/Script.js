     $('#user-form').submit( function(event){
       event.preventDefault();
  
       // $data = $(this).serialize()
  
       const name =  $('#name').val();
       const school =  $('#school').val();
       const form =  $('#form').val();
       const ward =  $('#ward').val();
       const amount =  $('#amount').val();
  
       $.post('./api/',{ add_beneficiary:true, name:name, school:school, form:form, ward:ward, amount:amount})
        .done((response)=>{
  
           console.log(response)
           alert(response)
        })
        .fail((response)=>{
           console.log(response)
        })
  
    });
   
  
  
  
    $('#budget-form').submit( function(event){
       event.preventDefault();
  
       // $data = $(this).serialize()
  
       const item =  $('.item').val();
       const price =  $('.price').val();
  
       $.post('./api/',{ add_budget:true, item:item, price:price})
        .done((response)=>{
  
           console.log(response)
  
           // this will automatically reload the page once new data is added
           window.location.reload() 
           
        })
        .fail((response)=>{
           console.log(response)
        })
  
    });