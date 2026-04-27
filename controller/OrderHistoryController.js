// Save order
const saveOrder = (orderDTO) => {
    let newRow = `
        <tr> 
            <td>${orderDTO.id}</td>
            <td>${orderDTO.customerId}</td> 
            <td>${orderDTO.itemName}</td> 
            <td>${orderDTO.unitPrice}</td> 
            <td>${orderDTO.quantity}</td> 
            <td>${orderDTO.total}</td> 
            <td>${orderDTO.date}</td> 
        </tr>`;

    $('#OrderHistoryTBody').append(newRow);
};

export {saveOrder};