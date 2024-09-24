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

import { useMutation } from "@apollo/client";
import { CREATE_BINARYIMAGEPOST, PUBLISH_BINARYIMAGEPOST } from "./api";

/*
 * Create a binary image post for the feed
 */
export const useCreateBinaryImagePost = () => {
    const [createFileMutation] = useMutation(CREATE_BINARYIMAGEPOST, {
        context: {
            apiName: "manage",
        },
    });

    const [publishMutation] = useMutation(PUBLISH_BINARYIMAGEPOST, {
        context: {
            apiName: "manage",
        },
    });

    const createBinaryImagePost = async (author: string, imageUrl: string) => {
        const timestamp = Date.now();
        const datePosted = new Date(timestamp).toISOString();
        const result = await createFileMutation({
            variables: {
                author,
                image: imageUrl,
                posted: datePosted,
            },
        });
        return result.data.createBinaryImagePost.data.id;
    };

    const publishBinaryImagePost = async (id: string) => {
        return publishMutation({
            variables: {
                id,
                meta: {
                    status: "published",
                },
            },
        });
    };

    return { createBinaryImagePost, publishBinaryImagePost };
};
