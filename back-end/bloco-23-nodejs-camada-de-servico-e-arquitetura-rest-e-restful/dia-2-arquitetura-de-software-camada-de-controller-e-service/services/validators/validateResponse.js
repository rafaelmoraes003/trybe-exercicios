const validateResponse = (response) => {
    if (!response.length) {
        return {
            error: {
                code: 404,
                message: 'Not found.',
            }
        };
    }

    return {
        code: 200,
        data: response,
    };
}

module.exports = { validateResponse };