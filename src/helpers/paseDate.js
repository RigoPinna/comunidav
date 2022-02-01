

export const paseDate = ( fullDate ) => {
    const options = { 
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    return {
        date: new Intl.DateTimeFormat('es-MX', options).format( fullDate ),
        hour: `a las ${new Intl.DateTimeFormat('es-MX',{hour:'2-digit',minute:"2-digit",hour12:true}).format( fullDate )}`
    }
    
}
