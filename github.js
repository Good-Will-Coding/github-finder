class Github {
    constructor() {
        this.client_id = 'c75f46e83e403680c4c6';
        this.client_secret = '35232a28edb1e636ab2b222885ef9f6584c7d671';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret${this.client_secret}`);
        
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret${this.client_secret}`);

        const profile = await profileResponse.json();

        const repos = await repoResponse.json();
        

        return {
            profile,
            repos
        }
    }
}