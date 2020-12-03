import * as React from 'react';

const keys = ['w', 'a', 's', 'd'];

const useWASD = () => {
    const [downKeys, setDownKeys] = React.useState({ forward: false, backwards: false, left: false, right: false });


    const checkForDown = React.useCallback((event: KeyboardEvent) => {
        switch (event.key) {
            case ('w'):
                setDownKeys({ ...downKeys, forward: true });
                break;
            case ('a'):
                setDownKeys({ ...downKeys, left: true });
                break;
            case ('s'):
                setDownKeys({ ...downKeys, backwards: true });
                break;
            case ('d'):
                setDownKeys({ ...downKeys, right: true });
                break;
            default:
                return;
        }
    }, [setDownKeys, downKeys])

    const checkForUp = React.useCallback((event: KeyboardEvent) => {
        switch (event.key) {
            case ('w'):
                setDownKeys({ ...downKeys, forward: false });
                break;
            case ('a'):
                setDownKeys({ ...downKeys, left: false });
                break;
            case ('s'):
                setDownKeys({ ...downKeys, backwards: false });
                break;
            case ('d'):
                setDownKeys({ ...downKeys, right: false });
                break;
            default:
                return;
        }
    }, [setDownKeys, downKeys]);


    React.useEffect(() => {

        document.addEventListener('keydown', checkForDown);
        document.addEventListener('keyup', checkForUp);

        return () => {
            document.removeEventListener('keydown', checkForDown);
            document.removeEventListener('keyup', checkForUp)
        }

    }, [checkForDown, checkForUp])

    return downKeys;


}

export default useWASD;