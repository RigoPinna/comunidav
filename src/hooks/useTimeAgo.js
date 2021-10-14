import '@formatjs/intl-relativetimeformat/polyfill'
import '@formatjs/intl-relativetimeformat/locale-data/en'


export const useTimeAgo = ( time, style="long"  ) => {
    try {
        const { value, unitEn, unitEs } = getTimeDiff( time );
        const rtf = new Intl.RelativeTimeFormat("es",{ style });
        return rtf.format( value, unitEn );
        
    } catch( e ) {
        return `${ time }`;
    }
}


const DATE_UNITS =[
    ['years',31536000000, 'años'],
    ['months', 2628000000, 'meses' ],
    ['days', 86400, 'dias'],
    ['hours', 3600, 'horas'],
    ['minutes', 60, 'minutos'],
    ['seconds', 1, 'segundos'],
]
const getTimeDiff = ( time ) => {
    try {
        let createdat = ((typeof time === "string") ? new Date( time ).getTime() : time );
        const now = Date.now();
        const elapset = ( createdat - now ) / 1000;
        for( const [ unitEn, secondsUnit, unitEs ] of DATE_UNITS) {
            if ( Math.abs(elapset) > secondsUnit || unitEn === 'second') {
                return { 
                    value: Math.round( elapset / secondsUnit ),
                    unitEn,
                    unitEs,
                }
            } else if( Math.abs(elapset) <= 1) {
                return { 
                    value: -1,
                    unitEn:'seconds',
                    unitEs,
                }
            }
        }
    } catch (e) {
        console.log( e )
    }
    
}
