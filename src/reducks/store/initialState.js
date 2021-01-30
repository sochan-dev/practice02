const initialState = {

    products:{
        list:[]
    },
    users:{
        cart:[],
        isSignIn:false,
        orders:[],
        role:"",
        uid:"",
        username:""
    },
    project:{
        name:"",
        detail:"",
        start:"",
        end:"",
        goals:[],
        puzzle:{
            largePieces:[],
        },
        selectedLargePiece:{
            id:"",
            name:"",
            type:"",
            detail:"",
            start:"",
            end:"",
            goals:[],
        },
        selectedMediumPiece:{
            id:"",
            name:"",
            type:"",
            detail:"",
            start:"",
            end:"",
            goals:[],
        },
        selectedSmallPiece:{
            id:"",
            name:"",
            type:"",
            detail:"",
            start:"",
            end:"",
            goals:[],
        }
        
    },
    

};

export default initialState

/**最終こうなる
 * const puzzle = {
    large:[
        {
            medium:[
                {
                small:[
                    {}
                ]
            }
        ]
        }
    ]
}
 */