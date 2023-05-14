import React from 'react'

function ListNames() {
    const name = ['Bruce', 'Diana', 'Clark']
    return (
        // *simple method of rendering list from an array
        // <div>
        //       <h2>{name[0]}</h2>
        //       <h2>{name[1]}</h2>
        //       <h2>{name[2]}</h2>
        // </div>

        // * rendering array elemanr in list using map method
        <div>
            {
                // functionName.map('name' => <span>{name}</span>)
                name.map(list => <h2>{list}</h2>)
            }

        </div>

    )
}

export default ListNames