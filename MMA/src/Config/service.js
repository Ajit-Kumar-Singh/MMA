//helper methods for calling rest API

export const getServiceCall = (url) =>
{

}

export const postServiceCall = (url, data) =>
{
fetch(url, { 
	method: "POST",
     headers: {
				'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
 			body: JSON.stringify(data)})
              .then((response) => {
                                    if (response.ok) {
                                        response.json().then(data => {
                                          return data;
                                        });
                                    }
        })
}

export const putServiceCall = (url, data) =>
{

}