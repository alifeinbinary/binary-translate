/*
 *   Copyright (c) 2024 Andrew Halliwell

 *   This program is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License as published by
 *   the Free Software Foundation, either version 3 of the License, or
 *   (at your option) any later version.

 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU General Public License for more details.

 *   You should have received a copy of the GNU General Public License
 *   along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { PreSignedPostPayloadProps } from "../types.d";

export const uploadFileToS3 = (
    presignedPostData: PreSignedPostPayloadProps,
    file: Blob,
) => {
    console.debug("presignedPostData", presignedPostData);
    console.debug("Uploading file to S3...");

    return new Promise((resolve, reject) => {
        const formData = new FormData();
        Object.keys(presignedPostData.data.fields).forEach((key) => {
            formData.append(key, presignedPostData.data.fields[key]);
        });
        // Actual file has to be appended last.
        formData.append("file", file);
        const xhr = new XMLHttpRequest();
        xhr.open("POST", presignedPostData.data.url, true);
        xhr.send(formData);
        xhr.onload = function () {
            // this.status === 204 ? resolve() : reject(this.responseText);
            if (xhr.status === 204) {
                resolve(xhr.response);
                console.debug("File uploaded successfully", xhr.response);
                return xhr.response.url;
            } else {
                reject(xhr.response);
                console.error("File upload failed:", xhr.response);
            }
        };
    });
};
