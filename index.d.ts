declare module "urlsafe-base64" {
    /**
     * Library version.
     */
    export var version: string;

    /**
     * Return an encoded Buffer as URL Safe Base64
     *
     * Note: This function encodes to the RFC 4648 Spec where '+' is encoded
     *       as '-' and '/' is encoded as '_'. The padding character '=' is
     *       removed.
     */
    export function encode(buffer: Buffer): string;

    /**
     * Return an decoded URL Safe Base64 as Buffer
     */
    export function decode(base64: string): Buffer;

    /**
     * Validates a string if it is URL Safe Base64 encoded.
     */
    export function validate(base64: string): boolean;
}
