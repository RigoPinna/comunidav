const date = /(^(lunes|martes|miércoles|jueves|viernes|sabado|domingo), ([0-9]{1,2}) (de) (enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre) (de) ([0-9]{4}))$/;
const imageFile = /(^(lunes|martes|miercoles|jueves|viernes|sabado|domingo), ([0-9]{1,2}) (de) (enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre) (de) ([0-9]{4}))$/;
export const REGEX_INPUT_VALUES = {
    name:/(^([A-Za-z]+)([A-Za-z\s]*))$/,
    lastName:/([A-Za-z\s]{2,40})$/,
    secondlastName:/([A-Za-z\s]{2,40})$/,
    phone:new RegExp( '^([0-9]{10})$'),
    rfc:new RegExp( '^((^[A-Z]{1})([A-Z0-9]{12}))$' ),
    land:{
        test: (value ) => {
            const regex =  /(^([0-3]{1}))$/;
            return ( +value > 0 && regex.test( value ) );
    
        }
    },
    state:{
        test: (value ) => {
            const regex =  /(^([0-9]{1,5}))$/;
            return ( +value > 0 && regex.test( value ) );
    
        }
    },
    country:{
        test: (value ) => {
            const regex =  /(^([0-9]{1,4}))$/;
            return ( +value > 0 && regex.test( value ) );
    
        }
    },
    email:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/,
    userName:/(^([A-Za-z]+)([\w]*))$/,
    password:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)([$@!%*?&]*)([A-Za-z\d@$!%*?&]|[^ ]){8,32}$/,
    confirmPass:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)([$@!%*?&]*)([A-Za-z\d@$!%*?&]|[^ ]){8,32}$/,
    associationName:/^([A-Za-z.0-9\s]{3,50})$/,
    category:/(^([1-9]{1}))$/,
    description:/^(([a-zA-Z0-9A-ZÀ-ÿ\u00f1\u00d1.$%&/()=?¿!.¡",:;\-_\s]){30,1000})$/,
    code:new RegExp( '^([0-9]{3})-([0-9]{3})-([0-9]{3})$'),
    numberCode: new RegExp('^([0-9]{1,3})$'),
    nameEvent:/^(([a-zA-Z0-9A-ZÀ-ÿ\u00f1\u00d1.$%&/()=?¿!.¡",:;\-_\s]){10,1000})$/,
    requirement:{
        test:( value ) => {
            const regex = /^(([a-zA-Z0-9A-ZÀ-ÿ\u00f1\u00d1.$%&/()=?¿!.¡",:;\-_\s]){10,1000})$/;
            return value.trim() !== "" ? regex.test( value ) : true;
        }
    },
    dateInit:{
        test: ( value ) => {
            const now = new Date();
            return ( value >= now );
   
        }
    },
    dateFinally:{
        test: ( dateFinally, dateInit ) => {
            return (  dateFinally > dateInit );
        }
    },
    ubication:/^(([a-zA-Z0-9A-ZÀ-ÿ\u00f1\u00d1.$%&/#&()=?¿!.¡",:;\-_\s]){10,1000})$/,
    image:{
        test: ( file ) => {

            const regex = /^((image)\/(jpeg|png))$/;
            return ( !!file ) ? regex.test( file.type ) : true;

        }
    },
    pathProfileAsc: /^(\/association\/([0-9]+))$/
}