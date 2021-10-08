

const DATE_UNITS =[
    ['years',31536000000],
    ['months', 2628000000 ],
    ['days', 86400],
    ['hours', 3600],
    ['minutes', 60],
    ['seconds', 1],
]
const getTimeDiff = ( time ) => {
    try {
        let createdat = ((typeof time === "string") ? new Date( time ).getTime() : time );
        const now = Date.now()
        const elapset = ( createdat - now ) / 1000;

        for( const [ unit, secondsUnit ] of DATE_UNITS) {
            if ( Math.abs(elapset) > secondsUnit || unit === 'second') {
                return { 
                    value: Math.round( elapset / secondsUnit ),
                    unit,
                }
            } else if( Math.abs(elapset) < 1) {
                return { 
                    value: -1,
                    unit:'seconds',
                }
            }
        }
    } catch (e) {
        console.log( e )
    }
    
}

export const useTimeAgo = ( time, style="long"  ) => {
    const { value, unit } = getTimeDiff( time );
    const rtf = new Intl.RelativeTimeFormat("es",{ style });
    return rtf.format( value, unit );
}
