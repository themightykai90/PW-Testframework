

export class EnvSetup {
    
    
    
    async _envsetup(server: string, variant: string): Promise<string> {

        let url = '';
    
        if (variant === 'DEV') {
    
            if (server === 'dev') {
    
                url = `http://${server}:3000`;
    
            } else if (server === 'qa') {
    
                url = `http://${server}:3000`;
    
            }
    
        } else if (variant === 'UAT') {
    
            if (server === 'sauce') {
    
                url = `https://www.saucedemo.com/`;
    
            } else if (server === 'test') {
    
                url = `https://www.saucedemo.com/`;
    
            }
    
        }
    
        return url;
    
    }

}