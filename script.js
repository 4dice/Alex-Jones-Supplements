function copyLink(link) {
    navigator.clipboard.writeText(link)
        .then(() => {
            alert('Affiliate link copied to clipboard: ' + link);
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
            alert('Failed to copy link. Please try manually.');
        });
}
